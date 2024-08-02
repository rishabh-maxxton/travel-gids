import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {

  team = [
    {
      name : "Jitendra Patil",
      image : "asset/images/Jitendra.jpg",
      designation: "Senior Software Engineer"
    },
    {
      name : "Rishabh Agarwal",
      image : "asset/images/profile.jpg",
      designation: "Software Engineer"
    },
    {
      name : "Rishikesh Puri",
      image : "asset/images/Rishi.jpg",
      designation: "UI/UX"
    },
    {
      name : "Akhilesh",
      image : "asset/images/Hingu.jpg",
      designation: "Software Engineer"
    },
    {
      name : "Varun Gujju",
      image : "asset/images/Gujju.jpg",
      designation: "Money Laundering "
    },
    {
      name : "Sandy Chetry",
      image : "asset/images/Sandy.jpg",
      designation: "Operations"
    },
  ]

}
