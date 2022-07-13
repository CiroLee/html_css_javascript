const createBtn = document.getElementById('create-btn');
const notesContainer = document.querySelector('.notes');
// 新增id, 采取当前列表id递增方式
function nextId() {
  const parent = document.querySelector('.notes');
  const children = parent.children;
  if (!children.length) {
    return 1;
  }
  const ids = Array.from(children).map(el => el.getAttribute('id').split('-')[1]);
  return Math.max(...ids) + 1;
}
// 删除便签
function deleteNote(id) {
  const _id = `note-${id}`;
  const node = document.getElementById(_id);
  notesContainer.removeChild(node);
  localStorage.removeItem(_id);
}
// 随机生成皮肤类型
function randomNoteColor() {
  const arr = ['pink', 'green', 'yellow', 'blue'];
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
// blur时自动保存
function textareaBlur(event, id, type) {
  const json = {
    type,
    text: event.target.innerText,
  }
  localStorage.setItem(`note-${id}`, JSON.stringify(json));
}
// 渲染便签
function renderNotes() {
  const notes = Object.entries(localStorage).map(([key, value]) => ({ key, value: JSON.parse(value)})).sort((a, b) => a.key.replace('note-', '') - b.key.replace('note-', ''));
  const fragment = document.createDocumentFragment();
  notes.forEach(item => {
    const note = createNote(item.key.replace('note-', ''), item.value.type, item.value.text);
    fragment.appendChild(note);
  });

  notesContainer.appendChild(fragment);
}
// 创建便签
function createNote(id, type, text = '') {
  const note = document.createElement('div');
  const content = document.createElement('div');
  note.setAttribute('id', `note-${id}`);
  note.classList.add('note');
  note.classList.add(type);

  // header
  const header = document.createElement('header');
  const headerChildren = `
  <span class="title">note-${id}</span>
  <div class="trial flex-center">
    <i class="ri-close-line close-btn" onclick="deleteNote(${id})"></i>
  </div>
  `;
  header.innerHTML = headerChildren;
  // content
  content.classList.add('content');
  content.innerHTML = `
    <div class="textarea" contenteditable="true" onblur="textareaBlur(event, ${id}, '${type}')">${text}</div>
  `

  note.appendChild(header);
  note.appendChild(content);

  return note;
}


createBtn.addEventListener('click', function() {
  const newId = nextId();
  const type = randomNoteColor();

  const note = createNote(newId, type);
  notesContainer.appendChild(note);
  document.querySelector(`#note-${newId} .textarea`).focus();
});

window.onload = renderNotes();