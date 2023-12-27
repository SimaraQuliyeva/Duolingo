const spans = document.querySelectorAll('span')
const lines = document.querySelector('#lines')

// console.log(spans)
spans.forEach(span => {
    let clonSpan= span.cloneNode(true)
    span.addEventListener('click', function () {
        if(!span.classList.contains('active')){
            lines.appendChild(clonSpan)
            // console.log('jhsdjncjh')
            span.classList.add('active')
        }
    })
    clonSpan.addEventListener('click', function() {
        lines.removeChild(clonSpan)
        span.classList.remove('active')
    })
});