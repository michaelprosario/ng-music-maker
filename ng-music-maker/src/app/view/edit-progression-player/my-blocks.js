
Blockly.Blocks['chord'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("Chord root:")
        .appendField(new Blockly.FieldTextInput('c4'),'root')
        .appendField("type:")
        .appendField(new Blockly.FieldNumber(0, 0, 4), 'type')
        .appendField("beats:")
        .appendField(new Blockly.FieldNumber(4), 'measures');

      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip('');
  }
};

Blockly.JavaScript['chord'] = function (block) {

  var valueRoot = block.getFieldValue("root");
  var valueType = block.getFieldValue("type");
  var valueMeasures = block.getFieldValue("measures");

  var code = "addChord('" + valueRoot + "', "+valueType+", "+valueMeasures+ ");\n";
  return code;
};
