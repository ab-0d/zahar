document.addEventListener("DOMContentLoaded", () => {
  renderCategoryNav();
  renderMenuSections();
});

function renderCategoryNav() {
  const nav = document.getElementById("category-nav-links");
  const fragment = document.createDocumentFragment();

  menuCategories.forEach((category) => {
    const link = document.createElement("a");
    link.href = `#${category.id}`;
    link.className = "category-pill";
    link.textContent = category.title;
    fragment.appendChild(link);
  });

  nav.appendChild(fragment);
}

function renderMenuSections() {
  const main = document.getElementById("menu-content");
  const fragment = document.createDocumentFragment();

  menuCategories.forEach((category, index) => {
    fragment.appendChild(buildMenuSection(category, index % 2 === 1));
  });

  main.appendChild(fragment);
}

function buildMenuSection(category, reverse) {
  const section = document.createElement("section");
  section.id = category.id;
  section.className = "menu-section";

  const grid = document.createElement("div");
  grid.className = `menu-section-grid${reverse ? " reverse" : ""}`;

  const imageWrap = document.createElement("div");
  imageWrap.className = "menu-section-image";
  const img = document.createElement("img");
  img.src = category.image;
  img.alt = category.title;
  img.loading = "lazy";
  imageWrap.appendChild(img);

  const content = document.createElement("div");

  const heading = document.createElement("div");
  heading.className = "menu-section-heading";
  const h2 = document.createElement("h2");
  h2.textContent = category.title;
  const p = document.createElement("p");
  p.textContent = category.subtitle;
  heading.appendChild(h2);
  heading.appendChild(p);

  content.appendChild(heading);

  if (category.items && category.items.length) {
    const itemsGrid = document.createElement("div");
    itemsGrid.className = "menu-items-grid";
    category.items.forEach((item) => {
      itemsGrid.appendChild(buildMenuItemCard(item));
    });
    content.appendChild(itemsGrid);
  }

  if (category.variants && category.variants.length) {
    content.appendChild(buildVariantsList(category.variants));
  }

  if (category.flavorGroups && category.flavorGroups.length) {
    content.appendChild(buildFlavorGroups(category.flavorGroups));
  }

  grid.appendChild(imageWrap);
  grid.appendChild(content);
  section.appendChild(grid);

  return section;
}

function formatPrice(price) {
  return `${price.toLocaleString("en-US")} د.ع`;
}

function buildMenuItemCard(item) {
  const card = document.createElement("div");
  card.className = "menu-item-card";

  const info = document.createElement("div");
  info.className = "menu-item-info";

  const nameRow = document.createElement("div");
  nameRow.className = "menu-item-name-row";
  const h3 = document.createElement("h3");
  h3.textContent = item.name;
  nameRow.appendChild(h3);

  if (item.popular) {
    const badge = document.createElement("span");
    badge.className = "badge-popular";
    badge.textContent = "الأكثر طلبًا";
    nameRow.appendChild(badge);
  }

  info.appendChild(nameRow);

  if (item.description) {
    const description = document.createElement("p");
    description.textContent = item.description;
    info.appendChild(description);
  }

  const price = document.createElement("span");
  price.className = "menu-item-price";
  price.textContent = formatPrice(item.price);

  card.appendChild(info);
  card.appendChild(price);

  return card;
}

function buildVariantsList(variants) {
  const wrap = document.createElement("div");
  wrap.className = "variants-list";

  variants.forEach((variant) => {
    const row = document.createElement("div");
    row.className = "variant-row";

    const info = document.createElement("div");
    info.className = "variant-info";

    const label = document.createElement("h4");
    label.textContent = variant.label;
    info.appendChild(label);

    if (variant.note) {
      const note = document.createElement("p");
      note.className = "variant-note";
      note.textContent = variant.note;
      info.appendChild(note);
    }

    const price = document.createElement("span");
    price.className = "menu-item-price";
    price.textContent = formatPrice(variant.price);

    row.appendChild(info);
    row.appendChild(price);
    wrap.appendChild(row);
  });

  return wrap;
}

function buildFlavorGroups(flavorGroups) {
  const wrap = document.createElement("div");
  wrap.className = "flavor-groups";

  flavorGroups.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "flavor-group";

    if (group.title) {
      const title = document.createElement("h4");
      title.className = "flavor-group-title";
      title.textContent = group.title;
      groupEl.appendChild(title);
    }

    const chips = document.createElement("div");
    chips.className = "flavor-chips";
    group.flavors.forEach((flavor) => {
      const chip = document.createElement("span");
      chip.className = "flavor-chip";
      chip.textContent = flavor;
      chips.appendChild(chip);
    });

    groupEl.appendChild(chips);
    wrap.appendChild(groupEl);
  });

  return wrap;
}
