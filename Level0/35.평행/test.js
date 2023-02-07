
function solution(list) {
    const leans = []

    for(let i = 0; i < list.length; i++) {
        const A = list[i];
        for(let j = i + 1; j < dots.length; j++) {
            const B = dots[j]
            const data = (B[1] - A[1])  / (B[0] - A[0])

            if(leans.includes(data)) return 1
            else leans.push(data)
        }
    }

    return 0;
}
