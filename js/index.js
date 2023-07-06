let name = prompt('Как вас зовут?').toLowerCase().trim()


if (name === "putin" || name ==="zelenskiy"  || name ==="biden"  || name ==="trump" ) {
    console.log('welcome mr.president ' + name );
} else {
    console.log('only for Presidents');
}