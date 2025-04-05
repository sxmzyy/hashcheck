function generateHash() {
  const text = document.getElementById("inputText").value;
  const algo = document.getElementById("algorithm").value;
  let hash = "";

  if (algo === "MD5") {
    hash = CryptoJS.MD5(text).toString();
  } else if (algo === "SHA1") {
    hash = CryptoJS.SHA1(text).toString();
  } else {
    hash = CryptoJS.SHA256(text).toString();
  }

  document.getElementById("outputHash").textContent = hash;
}

function compareHashes() {
  const h1 = document.getElementById("hash1").value.trim();
  const h2 = document.getElementById("hash2").value.trim();
  const result = document.getElementById("compareResult");

  if (!h1 || !h2) {
    result.textContent = "❌ Please enter both hashes!";
    result.style.color = "yellow";
    return;
  }

  if (h1 === h2) {
    result.textContent = "✅ Hashes Match!";
    result.style.color = "limegreen";
  } else {
    result.textContent = "❌ Hashes Do Not Match!";
    result.style.color = "red";
  }
}