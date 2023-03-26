import React from 'react'
import { Link } from 'react-router-dom'
import './schedule.css'
import './style.css'

function Schedule() {
  return (
    <div>
        <Link class="postClass" to='/posts'>Check posts about matches!</Link>
        {localStorage.getItem("accessToken") && (
            <>
                <Link class="ownpostClass" to='/createPost'>Create your own post</Link>
            </>
        )
        }
        
        <div class="date">
                <h2>Saturday - 29 October</h2>
            </div>
            <div class="match">
                <div class="hour">
                    <h3>23:00</h3>
                </div>
                <div class="teams">
                    <div class="srodek">
                        <img class="teamlogo" src="./images/Houston_Rockets.svg.png" alt="team_logo"/>
                    <h4 class="vs">vs</h4>
                    <img class="teamlogo" src="./images/lakers.png" alt="team_logo"/>
                    </div>
                </div>
                <div class="type">
                    <h4>BO1</h4>
                </div>
            </div>


            <div class="date">
                <h2>Sunday - 30 October</h2>
            </div>
            <div class="match">
                <div class="hour">
                    <h3>02:00</h3>
                </div>
                <div class="teams">
                    <div class="srodek">
                        <img class="teamlogo" src="./images/boston.png" alt="team_logo"/>
                    <h4 class="vs">vs</h4>
                    <img class="teamlogo" src="./images/warriors.png" alt="team_logo"/>
                    </div>
                </div>
                <div class="type">
                    <h4>BO1</h4>
                </div>
            </div>
            <div class="match">
                <div class="hour">
                    <h3>03:30</h3>
                </div>
                <div class="teams">
                    <div class="srodek">
                        <img class="teamlogo" src="./images/bulls.png" alt="team_logo"/>
                    <h4 class="vs">vs</h4>
                    <img class="teamlogo" src="./images/suns.png" alt="team_logo"/>
                    </div>
                </div>
                <div class="type">
                    <h4>BO1</h4>
                </div>
            </div>
            <div class="match">
                <div class="hour">
                    <h3>23:00</h3>
                </div>
                <div class="teams">
                    <div class="srodek">
                        <img class="teamlogo" src="./images/blazers.png" alt="team_logo"/>
                    <h4 class="vs">vs</h4>
                    <img class="teamlogo" src="./images/atlanta.png" alt="team_logo"/>
                    </div>
                </div>
                <div class="type">
                    <h4>BO1</h4>
                </div>
            </div>

            <div class="date">
                <h2>Monday - 31 October</h2>
            </div>
            <div class="match">
                <div class="hour">
                    <h3>01:00</h3>
                </div>
                <div class="teams">
                    <div class="srodek">
                        <img class="teamlogo" src="./images/toronto.png" alt="team_logo"/>
                    <h4 class="vs">vs</h4>
                    <img class="teamlogo" src="./images/76ers.png" alt="team_logo"/>
                    </div>
                </div>
                <div class="type">
                    <h4>BO1</h4>
                </div>
            </div>
            <div class="match">
                <div class="hour">
                    <h3>03:00</h3>
                </div>
                <div class="teams">
                    <div class="srodek">
                        <img class="teamlogo" src="./images/maveriks.png" alt="team_logo"/>
                    <h4 class="vs">vs</h4>
                    <img class="teamlogo" src="./images/spurs.png" alt="team_logo"/>
                    </div>
                </div>
                <div class="type">
                    <h4>BO1</h4>
                </div>
            </div>
    </div>
  )
}

export default Schedule