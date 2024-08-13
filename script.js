const textInput = document.querySelector(".text");
const textOutput = document.querySelector(".text-output");
const output = document.querySelector(".output");
const outputContainer = document.querySelector(".output-container");
const textNotFound = document.querySelector(".text-not-found");
const buttonEncode = document.querySelector(".btn-encode");
const buttonDecode = document.querySelector(".btn-decode");
const buttonCopy = document.querySelector(".btn-copy");


const aluracrypter = {
    isValidText: function (text) {
        const pattern = /[A-ZÀ-ÿ]/;
        if (pattern.test(text)) {
            return false;
        } else {
            return true;
        }
    },
    encoder: function (text) {
        const textEncoded = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        return textEncoded;
    },
    decoder: function (text) {
        const textDecoded = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textDecoded;
    },
};

const resetInputAndShowOutput = (text) => {
    if(!text){
        textNotFound.classList.remove("hidden");
        outputContainer.classList.add("hidden");
        return;
    }
    output.value = text;
    textNotFound.classList.add("hidden");
    outputContainer.classList.remove("hidden");
    textInput.value = "";
}

const showError = (show) => {
    const error = document.querySelector("#error");

    if(show){
        error.classList.add("alertError")
    } else {
        error.classList.remove("alertError")
    }
}

buttonEncode.onclick = () => {
    if (aluracrypter.isValidText(textInput.value) == false) {
        resetInputAndShowOutput();
        showError(true);
        return;
    }
    showError(false);
    const encodedText = aluracrypter.encoder(textInput.value);
    resetInputAndShowOutput(encodedText);
};

buttonDecode.onclick = () => {
    if (aluracrypter.isValidText(textInput.value) == false) {
        resetInputAndShowOutput();
        showError(true);
        return;
    }
    showError(false);
    const decodedText = aluracrypter.decoder(textInput.value);
    resetInputAndShowOutput(decodedText);
};

buttonCopy.onclick = () => {
    const textCopied = output.value;
    buttonCopy.innerHTML = "Copiado!";
    setTimeout(() => {
        buttonCopy.innerHTML = "Copiar";
    }, 2000);
    navigator.clipboard.writeText(textCopied);
};

    