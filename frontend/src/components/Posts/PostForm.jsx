import React, { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPost } from '../../reducks/posts/operations';

const PostForm = () => {
    const dispatch = useDispatch();
    const initialValues = { name: '', body: '' };
    const [values, setValues] = useState(initialValues);
    const [previewImage, setPreviewImage] = useState(null);
    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputFile = useRef(null);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const inputImage = event => {
        const file = event.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setPreviewImage(objectUrl);
        setImage(file);
    };

    const addPostButton = async () => {
        if (!values.name.trim() || !values.body.trim()) {
            alert(`Please fill out all required form.`);
            return;
        }
        setIsLoading(true);

        await dispatch(addPost({ name: values.name, body: values.body, image }));

        setIsLoading(false);
        setValues({ name: '', body: '' });
        setPreviewImage(null);
        setImage([]);
        inputFile.current.value = '';
    };

    return (
        <section className="post_form">
            <input
                type="text"
                name="name"
                value={values.name}
                placeholder="Name"
                onChange={handleInputChange}
                required
            />
            <textarea
                name="body"
                value={values.body}
                placeholder="Tell us anything"
                onChange={handleInputChange}
                required
            ></textarea>
            <input type="file" ref={inputFile} onChange={inputImage} />
            {previewImage && (
                <div className="upload-area">
                    <img
                        name="image"
                        type="file"
                        src={previewImage}
                        className={`upload-image ${previewImage ? 'preview-image' : ''}`}
                        alt="Upload"
                    />
                </div>
            )}
            <button type="button" onClick={addPostButton}>
                {isLoading ? 'Posing...' : 'Post'}
            </button>
        </section>
    );
};

export default PostForm;
