import React, { useState } from 'react';


const Form = ({ search, saveSearch, saveConsult }) => {

    const [error, saveError] = useState(false);

    // extraer ciudad y pais
    const { artist, title } = search;

    // función que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    // Cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if (artist.trim() === '' || title.trim() === '') {
            saveError(true);
            return;
        }

        saveError(false);

        saveConsult(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="alert alert-warning">All fields are required</p> : null}


            <div className="form-group">
                <label htmlFor="artist">Artist: </label>
                <input
                    type="text"
                    name="artist"
                    id="artist"
                    className="form-control"
                    value={artist}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="title">Song: </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={handleChange}
                />
            </div>
                <button
                    type="submit"
                    value="Find Lyrics"
                    className="btn btn-primary mt-2 mb-2"
                >Find Lyrics</button>
        </form>
    );
}

export default Form;