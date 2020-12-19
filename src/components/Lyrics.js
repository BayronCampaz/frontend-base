const Lyrics = ({result}) => {

    // extraer los valores
    const { lyrics } = result;

    if(!lyrics) return null;

    return ( 
        <textarea readOnly
          name="lyrics"
          rows="8"
          className="form-control"
          value={lyrics}>
          
        </textarea>
     );
}

export default Lyrics;