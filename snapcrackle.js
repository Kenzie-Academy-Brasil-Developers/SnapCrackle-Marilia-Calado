function SnapCrackle(maxValue) {
    const snapCrackle = [];
    
    
    for (i = 1; i <= maxValue; i++) {
        if (i%2 !== 0 && i%5 === 0) {
            snapCrackle[i] = 'SnapCrackle';
        } else if (i%5 === 0) {
            snapCrackle[i] = 'Crackle'
        } else if (i%2 !== 0) {
            snapCrackle[i] = 'Snap'
        } else {
            snapCrackle[i] = i;
        }
    }
    
    snapCrackle.shift()
    return snapCrackle.join(', ');
}