import * as Tone from 'tone'
import { createRoot } from 'react-dom/client'

const synth = new Tone.Synth().toDestination()

let notes = ["c4","c#4","d4","d#4","e4","f4","f#4","g4","g#4","a4","a#4","b4","c5",
    "c#5","d5","d#5","e5"]
let noteKeys = {'a' : 'c4','s' : 'd4','d' : 'e4','f' : 'f4','g' : 'a4','h' : 'b4','j' : 'c5'}



function noteSound(event){
   
    synth.triggerAttackRelease(noteKeys[event.key.toLowerCase()], "8n")
}

document.getElementById('body').addEventListener('keypress',noteSound)


function PianoKey(props){
    return  <button 
    className={props.note.length==2?'white':'black'} onClick={() => synth.triggerAttackRelease(props.note, "8n")} id='{props.note}'>{props.note}</button>
}

// Componente react
function PianoKeys(){
    return notes.map(note => 
       <PianoKey key={note} note={note}/>)
    
}

//Lineas obligatorias
const root = createRoot(document.getElementById('root'))

root.render(<PianoKeys></PianoKeys>)