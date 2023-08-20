const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(10% - 50px)',
      position: 'absolute',
      left: '0',
      width: 'fit-content',
      boxShadow: '0px 0px 2px black'
    },
    titleInput: {
      height: '30px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '3px',
      fontSize: '18px',
      width: 'calc(100% - 300px)',
      backgroundColor: '#29487d',
      color: 'white',
      paddingLeft: '50px'
    },
    editIcon: {
      position: 'absolute',
      left: '310px',
      top: '5px',
      color: 'white',
      width: '8',
      height: '8'
    },
    editorContainer: {
      height: '70%',
      width:'100%',
      boxSizing: 'border-box'
    }
  });
  
  export default styles;