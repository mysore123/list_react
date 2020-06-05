import React,{Component} from 'react';
import './font.css';
import FlipMove from 'react-flip-move';

class Completed extends Component {
    
    
    render(){
    const dit=this.props.dit;
    console.log(dit);

    const delitems=dit.map(item=>{
        return <div className="list"  key={item.key}>
                <p>{item.text}</p>
           </div>
     })
   
    return ( 
        <div >
            <h1 className="font">Available Roles</h1>
            <FlipMove duration={300} easing="ease-in-out">
                {delitems}
            </FlipMove>
        </div>
     );
    }
}
export default Completed;