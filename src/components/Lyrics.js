const Lyrics = ({result}) => {

    // extraer los valores
    const { lyrics } = result;

    if(!lyrics) return null;

    let words = lyrics.split(/\s+\b/).length;
    let lines = lyrics.split(/\r\n|\r|\n/).length;
    let text = `Song has ${words} words and ${lines} lines`

    return (
        <div>
        <p>{text}</p>
        <textarea readOnly
            name="lyrics"
            rows="8"
            className="form-control"
            value={lyrics}>    
        </textarea>  
        </div> 

     );
}

export default Lyrics;