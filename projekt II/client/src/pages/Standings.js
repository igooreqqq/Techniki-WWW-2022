import React from 'react'
import { Link } from 'react-router-dom'
import './standings.css'
import './style.css'

function Standings() {
  return (
    <div>
    <html lang="en">
    <body>

        <div class="main-section">
            <table id="standings-table">
                <tr class="top-table">
                    <th class="top-th">Drużyna <a class="img-sort" href="#"><img width="20px" src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">W <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">P <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">Zwy <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">MDT <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">Konf <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">Usi <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">Wyj <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">O10 <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                    <th class="top-th">Ser <a class="img-sort" href="#"><img src="./images/sort-icon.png" alt=""/></a></th>
                </tr>
                <tr class="main-tr">
                    <td>Bucks</td>
                    <td>6</td>
                    <td>0</td>
                    <td>1.000</td>
                    <td>-</td>
                    <td>5-0</td>
                    <td>5-0</td>
                    <td>1-0</td>
                    <td>6-0</td>
                    <td>W6</td>
                </tr>
                <tr class="main-tr">
                    <td>Cavaliers</td>
                    <td>5</td>
                    <td>1</td>
                    <td>.833</td>
                    <td>1.0</td>
                    <td>5-1</td>
                    <td>3-0</td>
                    <td>2-1</td>
                    <td>5-1</td>
                    <td>W5</td>
                </tr>
                <tr class="main-tr">
                    <td>Celtics</td>
                    <td>4</td>
                    <td>2</td>
                    <td>.667</td>
                    <td>2.0</td>
                    <td>4-2</td>
                    <td>2-1</td>
                    <td>2-1</td>
                    <td>4-2</td>
                    <td>W1</td>
                </tr>
                <tr class="main-tr">
                    <td>Raptors</td>
                    <td>4</td>
                    <td>3</td>
                    <td>.571</td>
                    <td>2.5</td>
                    <td>4-3</td>
                    <td>3-1</td>
                    <td>1-2</td>
                    <td>4-3</td>
                    <td>W1</td>
                </tr>
                <tr class="main-tr">
                    <td>Hawks</td>
                    <td>4</td>
                    <td>3</td>
                    <td>.571</td>
                    <td>2.5</td>
                    <td>3-3</td>
                    <td>2-1</td>
                    <td>2-2</td>
                    <td>4-3</td>
                    <td>L2</td>
                </tr>
                <tr class="main-tr">
                    <td>76ers</td>
                    <td>4</td>
                    <td>4</td>
                    <td>.500</td>
                    <td>3.0</td>
                    <td>4-3</td>
                    <td>1-2</td>
                    <td>3-2</td>
                    <td>4-4</td>
                    <td>W3</td>
                </tr>
                <tr class="main-tr">
                    <td>Knicks</td>
                    <td>3</td>
                    <td>3</td>
                    <td>.500</td>
                    <td>3.0</td>
                    <td>3-2</td>
                    <td>3-0</td>
                    <td>0-3</td>
                    <td>3-3</td>
                    <td>L2</td>
                </tr>
                <tr class="main-tr">
                    <td>Bulls</td>
                    <td>4</td>
                    <td>4</td>
                    <td>.500</td>
                    <td>3.0</td>
                    <td>4-3</td>
                    <td>2-2</td>
                    <td>2-2</td>
                    <td>4-4</td>
                    <td>W1</td>
                </tr>
                <tr class="main-tr">
                    <td>Wizards</td>
                    <td>3</td>
                    <td>4</td>
                    <td>.429</td>
                    <td>3.5</td>
                    <td>3-4</td>
                    <td>2-2</td>
                    <td>1-2</td>
                    <td>3-4</td>
                    <td>L3</td>
                </tr>
                <tr class="main-tr">
                    <td>Hornets</td>
                    <td>3</td>
                    <td>4</td>
                    <td>.429</td>
                    <td>3.5</td>
                    <td>1-2</td>
                    <td>1-2</td>
                    <td>2-2</td>
                    <td>3-4</td>
                    <td>L1</td>
                </tr>
                <tr class="main-tr">
                    <td>Pacers</td>
                    <td>3</td>
                    <td>5</td>
                    <td>.375</td>
                    <td>4.0</td>
                    <td>3-4</td>
                    <td>1-2</td>
                    <td>2-3</td>
                    <td>3-5</td>
                    <td>L1</td>
                </tr>
                <tr class="main-tr">
                    <td>Heat</td>
                    <td>3</td>
                    <td>5</td>
                    <td>.375</td>
                    <td>4.0</td>
                    <td>1-3</td>
                    <td>2-3</td>
                    <td>1-2</td>
                    <td>3-5</td>
                    <td>W1</td>
                </tr>
                <tr class="main-tr">
                    <td>Nets</td>
                    <td>2</td>
                    <td>6</td>
                    <td>.250</td>
                    <td>5.0</td>
                    <td>2-3</td>
                    <td>2-4</td>
                    <td>0-2</td>
                    <td>2-6</td>
                    <td>L1</td>
                </tr>
                <tr class="main-tr">
                    <td>Pistons</td>
                    <td>2</td>
                    <td>6</td>
                    <td>.250</td>
                    <td>5.0</td>
                    <td>1-6</td>
                    <td>2-2</td>
                    <td>0-4</td>
                    <td>2-6</td>
                    <td>L1</td>
                </tr>
                <tr class="main-tr">
                    <td>Magic</td>
                    <td>1</td>
                    <td>7</td>
                    <td>.125</td>
                    <td>6.0</td>
                    <td>1-5</td>
                    <td>1-1</td>
                    <td>0-6</td>
                    <td>1-7</td>
                    <td>L2</td>
                </tr>
            </table>

        </div>
    </body>
    
</html>
    </div>
  )
}

export default Standings