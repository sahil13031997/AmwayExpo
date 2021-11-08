var link;

function iframeCall(a) {
  link = a;

  document.getElementById('viewItemButton').style.display = 'flex';
}

function hideBox() {
  document.getElementById('instruction').style.display = 'none';
}

function openInNewWindow() {
  window.open(link);
}

function onCancelClicked()
{	
	document.getElementById('viewItemButton').style.display = 'none';
}

function callProductCard(imageURL,productName,ProductURL){
		
	document.querySelector(".product-card").style.display="block";
  // document.querySelector(".product-img").src=imageURL;
  document.querySelector(".product-details").src=productName;
  document.querySelector(".product-link").href=ProductURL;
  document.querySelector(".backdrop").style.display="block";
	console.log(imageURL); 
	console.log(productName);
	console.log(ProductURL);

	
}

