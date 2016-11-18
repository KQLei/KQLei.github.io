var i = 1;
var k = 165;
var g = 212;

function imgPshow(i) {
	var Image1p1 = document.getElementById("Image1p1");
	var Image1p2 = document.getElementById("Image1p2");
	var Image2p1 = document.getElementById("Image2p1");
	var Image2p2 = document.getElementById("Image2p2");
	var Image3p1 = document.getElementById("Image3p1");
	switch (i) {
		case 1:
			Image1p1.style.display = "block";
			Image1p2.style.display = "block";
			Image2p1.style.display = "none";
			Image2p2.style.display = "none";
			Image3p1.style.display = "none";
			break;
		case 2:
			Image1p1.style.display = "none";
			Image1p2.style.display = "none";
			Image2p1.style.display = "block";
			Image2p2.style.display = "block";
			Image3p1.style.display = "none";
			break;
		case 3:
			Image1p1.style.display = "none";
			Image1p2.style.display = "none";
			Image2p1.style.display = "none";
			Image2p2.style.display = "none";
			Image3p1.style.display = "block";
			break;
		default:
			Image1p1.style.display = "none";
			Image1p2.style.display = "none";
			Image2p1.style.display = "none";
			Image2p2.style.display = "none";
			Image3p1.style.display = "none";
			break;
	}
}

function stopImage(Index) {
	clearInterval(Timer); //停止计时器
	var imagePath = 'img/' + Index + '.jpg';
	var Image_banner = document.getElementById('Image_banner').src = imagePath;
	var sel_Btu = document.getElementById("sel_Btu");
	var arr = sel_Btu.getElementsByTagName("li");
	for (var j in arr) {
		arr[j].className = "black";
	}
	imgPshow(Index);
	i = Index;
}

function bnner_Image() {
	var ImgIndex = "img/" + i + ".jpg";
	var Image_banner = document.getElementById("Image_banner");
	var sel_Btu = document.getElementById("sel_Btu");
	var li_banner1 = document.getElementById("Image" + i);
	var arr = sel_Btu.getElementsByTagName("li");
	for (var j in arr) {
		arr[j].className = "black";
	}
	li_banner1.className = "current";
	Image_banner.src = ImgIndex;
	imgPshow(i);
	i++;
	if (i > 4) {
		i = 1;
	}

	Timer = setTimeout("bnner_Image()", 3000);
}

function beginImge() {
	i += 1;
	if (i > 4) {
		i = 1;
	}
	bnner_Image();
}

function LastImage() {
	i--; //使i变成上一个图片的索引值
	if (i < 1) {
		i = 4;
	}
	clearInterval(Timer); //停止计时器
	var imagePath = 'img/' + i + '.jpg';
	var Image_banner = document.getElementById("Image_banner");
	Image_banner.src = imagePath;
	imgPshow(i);
	var li_banner1 = document.getElementById("Image" + i);
	var sel_Btu = document.getElementById("sel_Btu");
	var arr = sel_Btu.getElementsByTagName("li");
	for (var j in arr) {
		arr[j].className = "black";
	}
	li_banner1.className = "current";
}

function NextImage() {
	i++; //使i变成上一个图片的索引值
	if (i > 4) {
		i = 1;
	}
	clearInterval(Timer); //停止计时器
	var imagePath = 'img/' + i + '.jpg';
	var Image_banner = document.getElementById("Image_banner");
	Image_banner.src = imagePath;
	imgPshow(i);
	var li_banner1 = document.getElementById("Image" + i);
	var sel_Btu = document.getElementById("sel_Btu");
	var arr = sel_Btu.getElementsByTagName("li");
	for (var j in arr) {
		arr[j].className = "black";
	}
	li_banner1.className = "current";
}

function changeIndex() {
	i = i - 1;
	if (i < 1) {
		i = 4;
	}
}
//			content1部分
function ShowleftContent(object, index) {
	var LeftOneContent = document.getElementById("LeftOneContent");
	var LeftTwoContent = document.getElementById("LeftTwoContent");
	var LeftThreeContent = document.getElementById("LeftThreeContent");
	var leftTitle = document.getElementById("leftTitle");
	var arr = leftTitle.getElementsByTagName("li");
	for (var j in arr) {
		arr[j].className = "";
	}
	object.className = "on";
	if (index == 1) {
		LeftOneContent.style.display = "block";
		LeftTwoContent.style.display = "none";
		LeftThreeContent.style.display = "none";
	} else if (index == 2) {
		LeftOneContent.style.display = "none";
		LeftTwoContent.style.display = "block";
		LeftThreeContent.style.display = "none";
	} else {
		LeftOneContent.style.display = "none";
		LeftTwoContent.style.display = "none";
		LeftThreeContent.style.display = "block";
	}
}

function ShowrightContent(object, index) {
	var RrightOneContent = document.getElementById("RrightOneContent");
	var RightTwoContent = document.getElementById("RightTwoContent");
	var rightTitle = document.getElementById("rightTitle");
	var arr = rightTitle.getElementsByTagName("li");
	for (var j in arr) {
		arr[j].className = "";
	}
	object.className = "on";
	if (index == 1) {
		RrightOneContent.style.display = "block";
		RightTwoContent.style.display = "none";
	} else {
		RrightOneContent.style.display = "none";
		RightTwoContent.style.display = "block";
	}
}

function Content1ImageBanner() {
	var ImageTilte165 = document.getElementById("ImageTilte165");
	var ImageTilte166 = document.getElementById("ImageTilte166");
	var ImageTilte167 = document.getElementById("ImageTilte167");
	var ImageTilte168 = document.getElementById("ImageTilte168");
	var ImageTilte169 = document.getElementById("ImageTilte169");
	var Content1ImageTitle = document.getElementById("Content1ImageTitle");
	var arr = Content1ImageTitle.getElementsByTagName("div");
	for (var j in arr) {
		arr[j].className = "ImageTitle2";
	}
	switch (k) {
		case 165:
			ImageTilte165.className = "ImageTitle1";
			break;
		case 166:
			ImageTilte166.className = "ImageTitle1";
			break;
		case 167:
			ImageTilte167.className = "ImageTitle1";
			break;
		case 168:
			ImageTilte168.className = "ImageTitle1";
			break;
		case 169:
			ImageTilte169.className = "ImageTitle1";
			break;
		default:
			break;
	}
	var ImagePath = 'img/' + k + '.jpg';
	var Content1ImageShow = document.getElementById("Content1ImageShow");
	Content1ImageShow.src = ImagePath;
	k++;
	if (k > 169) {
		k = 165;
	}
	setTimeout("Content1ImageBanner()", 2000);
}

function container2centerShowImageBanner() {
	var imagePath = "img/" + g + ".jpg";
	var container2centerShowImage = document.getElementById("container2centerShowImage");
	container2centerShowImage.src = imagePath;
	g++;
	if (g > 217) {
		g = 212;
	}
	T = setTimeout("container2centerShowImageBanner()", 2000);
}

function container2ChangeImagePath() {
	g -= 1;
	if (g < 212) {
		g = 217;
	}
	clearInterval(T);
}

function container2BeginImage() {
	container2centerShowImageBanner();
}

function container2centerImageNextBtn() {
	clearInterval(T);
	g++;
	if (g > 217) {
		g = 212;
	}
	var imagePath = "img/" + g + ".jpg";
	var container2centerShowImage = document.getElementById("container2centerShowImage");
	container2centerShowImage.src = imagePath;
}

function container2centerImageTogPrev() {
	clearInterval(T);
	g--;
	if (g < 212) {
		g = 217;
	}
	var imagePath = "img/" + g + ".jpg";
	var container2centerShowImage = document.getElementById("container2centerShowImage");
	container2centerShowImage.src = imagePath;
}

function changeContent3Image(path) {
	var changeImgPath = document.getElementById("Image" + path);
	changeImgPath.style.backgroundSize = "190px 190px";
}

function ReturnContent3Image(path) {
	var changeImgPath = document.getElementById("Image" + path);
	changeImgPath.style.backgroundSize = "180px 179px";
}