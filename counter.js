fetch ('https://wvmekkxrt8.execute-api.us-east-1.amazonaws.com/prod/getcount')
.then(x => x.text())
.then(y => document.getElementById("hits").innerHTML = y);