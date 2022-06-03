getImage();
function getImage()
{
	if(app.documents.length != 0){
		const doc1 = app.activeDocument;

		var imageUrl = prompt("URL to online image", "");

		if (imageUrl) {
			var extArray = imageUrl.split(".");
			var ext = extArray[extArray.length - 1];
		} else {
			ext = "";
		}

		if (ext == "png" || ext == "jpg" || ext == "jpeg" || ext == "webp" || ext == "tiff" || ext == "tif" || ext == "bmp") {
			var filePath = '~/Desktop/90a3ed9e32b2aaf4c6153d4286ade99a809.'+ext;

			var file = new File(filePath);
			app.system("curl -o "+ file.fsName +" "+imageUrl);
			app.open(file);
			file.remove();  
		
			const doc2 = app.activeDocument;
			doc2.activeLayer.name = "Image Layer";
			doc2.layers[0].allLocked = false;
		
			const inputLayer = doc2.layers[0];
			inputLayer.duplicate(doc1, ElementPlacement.PLACEATBEGINNING);
		
			doc2.close(SaveOptions.DONOTSAVECHANGES);
		} else {
			alert("Not an accepted format");
			return;
		}
	} else {
		alert("No open documents");
		return;
	}
}