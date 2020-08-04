var button = document.getElementById('plus'),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = count;
};


