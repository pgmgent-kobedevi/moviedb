import Button from "./Button";

const AddButton = ({adder}) => {
    return (
        <Button 
            color='secondary' 
            className="add" 
            onClick={adder}
        >
            
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
        </Button>
    )

}

export default AddButton;