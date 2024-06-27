/**
 * Adds a custom menu with items to show the sidebar and dialog.
 *
 * @param {Object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e) {
  //Sub na parte de extensões
  SpreadsheetApp.getUi()
      .createAddonMenu()
      .addItem('Exemplo de submenu', 'showMessageBox')
      .addToUi();

   // Menu exclusivo
  var ui = SpreadsheetApp.getUi();
    ui.createMenu('** AMPScripts **')
      .addItem('First item', 'menuItem1')
      .addSeparator()
      .addSubMenu(ui.createMenu('Sub-menu')
          .addItem('Second item', 'menuItem2'))
      .addToUi();
}

/**
 * Runs when the add-on is installed; calls onOpen() to ensure menu creation and
 * any other initializion work is done immediately.
 *
 * @param {Object} e The event parameter for a simple onInstall trigger.
 */
function onInstall(e) {
  onOpen(e);
}
