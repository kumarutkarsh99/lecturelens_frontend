import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [tags, setTags] = useState('');
    const [uploadResult, setUploadResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('tags', tags);

        try {
            const response = await axios.post('lecturelensbackend-production.up.railway.app/upload', formData);
            alert(response.data.message);
            setUploadResult(response.data);

            setSelectedFile(null);
            setTags('');
        } catch (error) {
            console.error('Upload error:', error.response ? error.response.data : error);
            alert('Error uploading file');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-box d-flex flex-column align-items-center p-4 w-100">
            <div className='upload d-flex flex-column align-items-center'>
                <h4 className="fs-3 fw-bold text-center mb-4 u-heading">Upload Lecture Notes</h4>

                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3 w-100">
                    <input type="file" onChange={handleFileChange} accept="image/*,.pdf" className="form-control" />
                    <input
                        type="text"
                        placeholder="Tags (optional)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-upload w-100" disabled={loading}>
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                </form>
            </div>

            {uploadResult && (
                <div className="summary mt-4">
                    <h5>Summary:</h5>
                    <p>{uploadResult.summary}</p>
                    <h6>Keywords:</h6>
                    <p>{uploadResult.keywords.join(', ')}</p>
                </div>
            )}
        </div>
    );
}

export default UploadForm;
