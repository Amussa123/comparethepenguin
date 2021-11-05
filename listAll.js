'use strict';

fetch('http://localhost:8083/getAll')
    .then((response) => {
        if (response.status !== 200) {
            console.error(`status: ${response.status}`);
        }
    })