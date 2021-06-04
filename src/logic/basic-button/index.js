
export default function basicButton(name, i) {
    const img = require('../../assets/images/'+name);
    return (
        <div className="basic-button" key={i}>
            <img src={img['default']} alt={name}/>
        </div>
    )
  }
  