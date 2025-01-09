// 페이지가 로드될 때 마지막 배경 색을 로드하는 함수
function loadBackgroundColor() {
    const storedColor = localStorage.getItem('backgroundColor');
    if (storedColor) {
      document.body.style.backgroundColor = storedColor;
    }
  }
  
  // 버튼 클릭 시 배경 색을 랜덤으로 변경하고, 로컬 스토리지에 저장하는 함수
  function changeBackgroundColor() {
    // 색상 배열
    const colors = ['black', 'green', 'yellow'];
  
    // 랜덤으로 색 선택 (0, 1, 2 중 하나)
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // 배경색을 변경하고 로컬 스토리지에 저장
    document.body.style.backgroundColor = randomColor;
    localStorage.setItem('backgroundColor', randomColor); // 로컬 스토리지에 색상 저장
  }
  
  // 페이지 로드 시 저장된 배경색을 설정
  loadBackgroundColor();
  
  // 버튼 클릭 이벤트 리스너
  document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
  