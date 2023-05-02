import Box from './Box'

export default function Board(props) {
    const rows = []
    for (var i = 0; i < 3; i++) {
        rows.push(
        <div key={i} className="boardRow">
            <Box clearBoard={props.clearBoard} turn={props.turn} setTurn={props.setTurn}></Box>
            <Box clearBoard={props.clearBoard} turn={props.turn} setTurn={props.setTurn}></Box>
            <Box clearBoard={props.clearBoard} turn={props.turn} setTurn={props.setTurn}></Box>
        </div>
        )
    }
    
     
    return (
        <>
        {rows}
        </>
    )
}