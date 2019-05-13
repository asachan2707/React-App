import React from 'react';

function MainContent() {
    const firstname = "Bob";
    const lastname = "Michal";
    const hours = new Date().getHours();
    let timeOfDay = ''
    const styles = {
        color: "#fff",
        backgroundColor: "red",
        padding: "5px",
        fontSize: 14
    }

    if (hours < 12) {
        timeOfDay = 'morning';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'noon';
        styles.color = '#fff'
    } else {
        timeOfDay = 'night';
        styles.color = '#fff'
    }

    return (
        <div>
            <main>
                <p>
                    Hello <span style={styles}>{firstname + ' ' + lastname}</span>, <span style={{ color: "#ff8c00" }}>Good {timeOfDay}!</span>
                </p>
            </main>
        </div >
    );
}

export default MainContent;