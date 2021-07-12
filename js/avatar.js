const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserPhoto = document.querySelector('.ad-form__upload input[type=file]');
const previewDiv = document.querySelector('.ad-form__photo');

const showAvatar = () => {
  fileChooserAvatar.addEventListener('change', () => {
    const file = fileChooserAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        previewAvatar.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

const showPhoto = () => {
  let previewPhoto = document.createElement('img');
  fileChooserPhoto.addEventListener('change', () => {
    const file = fileChooserPhoto.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();
      previewDiv.style.display = 'flex';
      reader.addEventListener('load', () => {
        previewPhoto.remove();
        previewPhoto = document.createElement('img');
        previewPhoto.style.width = '40px';
        previewPhoto.style.height = '44px';
        previewPhoto.style.margin = 'auto';
        previewPhoto.alt = 'Фотография жилья';
        previewPhoto.src = reader.result;
        previewDiv.appendChild(previewPhoto);
      });

      reader.readAsDataURL(file);
    }
  });
};
export { showAvatar, showPhoto };
