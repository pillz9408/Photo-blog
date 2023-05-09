const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {
    // 이미지가 30개 이상일 경우 모든 이미지 삭제
    if(gridContainer.children.length >=30){
        const confirmed = confirm("이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?")
        if (confirmed){
            gridContainer.innerHTML = ""; // 이미지 모두 삭제
        } else {
            return; // 취소를 누르면 이벤트 종료
        }
    }

    const randomNumber = Math.floor(Math.random() * 1000);
    const imgUrl = `https://picsum.photos/500?random=${randomNumber}`
    const img = document.createElement('img');
    
    //img.src = imgUrl
    img.src = `https://picsum.photos/500?random=${Math.floor(Math.random() * 1000)+1}`; // 랜덤 이미지 URL
    console.log(Math.floor(Math.random() * 1000)+1)

    gridContainer.appendChild(img);
});