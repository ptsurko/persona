
// TODO: Condider to rename to WidgetModel
function Section(title) {
  this.title = title;
};


function ListSection(title, items) {
  ListSection.superclass.constructor.call(this, title);

  this.items = items || []
};
extend(ListSection, Section);


ListSection.prototype.removeItem = function(item) {
  var index = this.items.indexOf(item);
  if (index >= 0) {
    this.items.splice(index, 1);
  }
};

ListSection.prototype.addItem = function(item) {
  this.items.push(item);
};


function TextListSection(title, items) {
  TextListSection.superclass.constructor.call(this, title, items);
};
extend(TextListSection, ListSection);

TextListSection.prototype.addNewItem = function() {
  this.items.push(new TextItem('Age', '30'));
};


function RangeSection(title, items, min, max) {
  RangeSection.superclass.constructor.call(this, title, items);

  this.min = min || 0
  this.max = max || 0;
};
extend(RangeSection, ListSection);

RangeSection.prototype.addNewItem = function() {
  var value = Math.floor(Math.random() * 10) + 1;
  this.items.push(new RangeItem('Development', value, 'Judging', 'Perceiving'));
};


function StorySection(title, story) {
  StorySection.superclass.constructor.call(this, title);

  this.story = story || '';
};
extend(StorySection, Section);


function LabeledItem(label) {
  this.label = label || '';
};


function TextItem(label, value) {
  TextItem.superclass.constructor.call(this, label);

  this.value = value || '';
};
extend(TextItem, LabeledItem);


function RangeItem(label, value, minLabel, maxLabel) {
  TextItem.superclass.constructor.call(this, label);

  this.value = value || 0;
  this.minLabel = minLabel || '';
  this.maxLabel = maxLabel || '';
};


function AvatarSection(avatarUrl) {
  this.avatarUrl = avatarUrl || 'images/blank_avatar_male.jpg';
};
extend(AvatarSection, Section);


function extend(Class, BaseClass) {
  var F = function() {}
  F.prototype = BaseClass.prototype;
  Class.prototype = new F();
  Class.prototype.constructor = Class;
  Class.superclass = BaseClass.prototype;
};
