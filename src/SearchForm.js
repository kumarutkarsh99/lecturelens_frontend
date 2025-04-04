import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function SearchForm() {
    const [query, setQuery] = useState('');
    const [tag, setTag] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get('https://lecturelensbackend-production.up.railway.app/search', {
                params: { 
                    q: query, 
                    tag, 
                    start_date: startDate ? startDate.toISOString().split('T')[0] : '',
                    end_date: endDate ? endDate.toISOString().split('T')[0] : '' 
                },
            });

            if (response.data.length === 0) {
                alert("No matching notes found.");
            }

            setResults(response.data);
        } catch (error) {
            console.error('Search error:', error.response ? error.response.data : error);
            alert('Error searching notes');
        }
        setLoading(false);
    };

    const handleDelete = async (noteId) => {
        if (!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            const response = await axios.delete(`https://lecturelensbackend-production.up.railway.app/delete/${noteId}`);
            
            if (response.status === 200) {
                alert("Deleted successfully");
                setResults(results.filter(note => note.id !== noteId));
            } else {
                throw new Error("Failed to delete note");
            }
        } catch (error) {
            console.error('Delete error:', error.response ? error.response.data : error);
            alert('Error deleting note');
        }
    };

    return (
        <div className="search-box">
            <div className='s-box'>
                <div className='search'>
                    <h4 className="fs-3 fw-bold text-center mb-4 s-heading">Search Lecture Notes</h4>
                    <form onSubmit={handleSearch} className="d-flex flex-column gap-3 w-100">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Enter search term"
                            className="form-control shadow-sm"
                        />
                        <input
                            type="text"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                            placeholder="Filter by tag (optional)"
                            className="form-control shadow-sm"
                        />
                        <div className="date-range d-flex gap-2 w-100">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="form-control shadow-sm flex-fill"
                                placeholderText="Start Date (optional)"
                                dateFormat="yyyy-MM-dd"
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                className="form-control shadow-sm flex-fill"
                                placeholderText="End Date (optional)"
                                dateFormat="yyyy-MM-dd"
                            />
                        </div>
                        <button type="submit" className="btn btn-search w-100 shadow" disabled={loading}>
                            {loading ? "Searching..." : "Search"}
                        </button>
                    </form>
                </div>
            </div>

            {results.length > 0 && (
                <div className="results-box text-center">
                    <h3 className="mb-4">Results:</h3>
                    {results.map((note) => (
                        <div key={note.id} className="note-card mb-4 border rounded p-3 shadow-sm">
                            <p><strong>File Name:</strong> {note.file_name}</p>
                            <p><strong>Tags:</strong> {note.tags}</p>
                            <p><strong>Summary:</strong> {note.summary}</p>
                            <p><strong>Excerpt:</strong> {note.text_excerpt}</p>
                            {note.file_url && (
                                <p>
                                    <a href={note.file_url} target="_blank" rel="noopener noreferrer">
                                        Open File
                                    </a>
                                </p>
                            )}
                            <p><strong>Uploaded On:</strong> {new Date(note.created_at).toLocaleString()}</p>
                            <button
                                className="btn btn-danger mt-2 w-100"
                                onClick={() => handleDelete(note.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


export default SearchForm;
