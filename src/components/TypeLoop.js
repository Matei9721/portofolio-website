import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import useSound from 'use-sound';
import hoverSound from '../obi-wan-hello-there.mp3';
import '../App.css'; // Make sure to adjust the path to your CSS file

const TypeLoop = () => {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setStartTyping(true);
        }, 2900); // 2 seconds delay

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    const [play] = useSound(hoverSound);
    return (

        <div onClick={play} className="centered-container">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('<span class="typewriter-string">Hello there, my name is </span><span data-entity="person"> Matei Penca </span>')
                            .callFunction(() => {
                                setStartTyping(true)
                            })
                            .start();
                    }}
                    options={{
                        loop: false,
                        delay: 75,
                        cursor: '<span class="typewriter-cursor"></span>',
                    }}
                />
                {startTyping && (
                    <Typewriter
                        options={{
                            strings: [
                                '<span class="typewriter-role-string">const role = </span><span class="typewriter-string">"Data Scientist";</span>',
                                '<span class="typewriter-role-string">const role_new = </span><span class="typewriter-string">"Software Engineer";</span>'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 900,
                            delay: 75,
                            cursor: '<span class="typewriter-cursor"></span>',
                        }}
                    />
                )}
        </div>

    );
};

export default TypeLoop;
