import '../../index.css'

const Dialog = (props) => {
    return (
        <div class="dialog_background">
            <div class='dialog_canvas'>
                <img class = "dialog_img" src={props.card.url} alt={props.card.name} /> <br/>
                <div class = "dialog_text">
                    <h3 class = "detail_name" >{props.card.name}</h3>
                    <p> Some description for the pokemon </p>
                    <input type ='button' class='close_btn' value='+' onClick = {() => props.onClose(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Dialog
