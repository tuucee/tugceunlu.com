const themes = {
  soft: {
    name: "Soft Notebook",
    desc: "Sıcak, sakin ve kişisel; araştırma defteri hissini yumuşatıyor."
  },
  editorial: {
    name: "Editorial Notebook",
    desc: "Daha güçlü tipografi ve dergi hissi; profesyonel ama akademik-site gibi değil."
  },
  scientific: {
    name: "Scientific Notebook",
    desc: "Figür, proje, veri ve kısa notları daha belirgin gösteren araştırma odaklı yön."
  }
};

const buttons = document.querySelectorAll("[data-set-theme]");
const nameEl = document.querySelector("#theme-name");
const descEl = document.querySelector("#theme-desc");

function setTheme(theme) {
  document.body.dataset.theme = theme;
  buttons.forEach(b => b.classList.toggle("is-active", b.dataset.setTheme === theme));
  nameEl.textContent = themes[theme].name;
  descEl.textContent = themes[theme].desc;
  localStorage.setItem("notebook-theme", theme);
}

buttons.forEach(btn => btn.addEventListener("click", () => setTheme(btn.dataset.setTheme)));

const saved = localStorage.getItem("notebook-theme");
if (saved && themes[saved]) setTheme(saved);
