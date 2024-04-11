import React from 'react';

const Header = ({ title, onLeftButtonPress, onRightButtonPress }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>{title}</h1>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: '20px 0', /* Increased padding for better spacing */
    height: '85px',
    width: '100%',
    borderBottom: '2px solid #007bff', /* Added bottom border for separation */
  },
  title: {
    fontSize: '24px', /* Increased font size for better readability */
    fontWeight: 'bold',
    margin: '0',
    color: '#333', /* Changed text color to improve contrast */
    textTransform: 'uppercase', /* Uppercase title for a more prominent look */
  },
};

export default Header;
