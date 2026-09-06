const themes = {
  literary: {
    name: "Literary Journal",
    desc: "Sıcak, sakin ve uzun okumayı öne çıkaran edebi yön."
  },
  notebook: {
    name: "Research Notebook",
    desc: "Notlar, figürler ve küçük deneyler için araştırma defteri hissi."
  },
  forest: {
    name: "Forest After Rain",
    desc: "Koyu, doğal ve atmosferik; bilimi klişe biyoloji ikonlarına yaslanmadan taşıyor."
  },
  editorial: {
    name: "European Editorial",
    desc: "Güçlü tipografi ve dergi hissi; kişisel yayın gibi davranıyor."
  },
  midnight: {
    name: "Midnight Notes",
    desc: "Gece yazılan düşünce defteri; daha kişisel ve yoğun bir atmosfer."
  },
  playful: {
    name: "Playful Scientific",
    desc: "Bilim iletişimi, veri ve küçük açıklamalar için daha canlı ve deneysel."
  }
};

const buttons = document.querySelectorAll("[data-set-theme]");
const name = document.querySelector("#theme-name");
const desc = document.querySelector("#theme-desc");

function setTheme(theme) {
  document.body.dataset.theme = theme;
  buttons.forEach(btn => btn.classList.toggle("is-active", btn.dataset.setTheme === theme));
  name.textContent = themes[theme].name;
  desc.textContent = themes[theme].desc;
  localStorage.setItem("tugce-theme", theme);
}

buttons.forEach(button => {
  button.addEventListener("click", () => setTheme(button.dataset.setTheme));
});

const saved = localStorage.getItem("tugce-theme");
if (saved && themes[saved]) setTheme(saved);
