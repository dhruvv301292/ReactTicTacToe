import Box from './Box'

export default function Board(props) {
    const rows = []
    for (var i = 0; i < 3; i++) {
        rows.push(
        <div key={i} className="boardRow">
            <Box row={i} col={0}></Box>
            <Box row={i} col={1}></Box>
            <Box row={i} col={2}></Box>
        </div>
        )
    }
    return (
        <>
        {rows}
        </>
    )
}
