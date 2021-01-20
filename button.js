function collapse(self) {
  if (self.value === ">"){
    var cont = document.querySelectorAll('.con');
    var i = 0;
    while (i < cont.length){
      cont[i].style.display='none';
      i++;
    }
    self.value = "^";
  } else {
    var cont = document.querySelectorAll('.con');
    var i = 0;
    while (i < cont.length){
      cont[i].style.display='block';
      i++;
    }
    self.value = ">";
  }
}
