import React from 'react'

function MemoComp () {
    return (
        <div>
            Memo Component
        </div>
    )
}

export default React.memo(MemoComp)