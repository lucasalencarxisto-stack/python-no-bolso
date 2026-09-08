import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';

import {
  PythonTerminalComponent
} from '../components/python-terminal/python-terminal.component';


@Component({
  selector: 'app-lab',
  templateUrl: './lab.page.html',
  styleUrls: ['./lab.page.scss'],
  standalone: true,

  imports: [
    IonContent,
    RouterLink,
    PythonTerminalComponent
  ]
})
export class LabPage {

  initialCode =
`# Laboratório Python 🐍

mensagem = "Python no Bolso"

print(mensagem)
`;

}