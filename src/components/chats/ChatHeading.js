/*jshint esversion: 6 */

import React from 'react';
import { IoIosVideocam } from 'react-icons/io';
import { FaUserPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";

export default function({name, numberOfUsers}) {
        return (
            <div className = "chat-header">
                <div className = "user-info">
                    <div className = "user-name">{name}</div>
                    <div className = "status">
                        <div className = "indicator"></div>
                        <span>{numberOfUsers ? numberOfUsers : null}</span>
                    </div>
                </div>
            <div className = "options">
                    <IoIosVideocam />
                    <FaUserPlus />
                    <FaEllipsisV />
            
                </div>
        </div>
        );
    }
