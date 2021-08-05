import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DataSource } from '../DataSource';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  disabled = true;

  electionList:string[] = ["Falkirk East","Falkirk West","Central Scotland"];

  falkirkEast:string[] = ["Scottish Conservative & Union Party","Scottish Labour Party","Scottish Co-operative","Independent","Scottish Liberal Democrats","Scottish National Party(SNP)"];
  falkirkWest:string[] = ["Scottish Labour Party","Scottish Conservative & Union Party" , "Scottish National Party(SNP)","Scottish Liberal Democrats"];
  centralScotland:string[]=["Abolish the Scottish Parliament Party","Alba Party","All for Unity"]

  isclosed:boolean=false;
  constructor(private toaster:ToastrService,private modalService: NgbModal,private router:Router) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.toaster.success("Welcome to E-Voting","Login Successful");
  }

   imageSrc(url:string)
  {
     switch(url) { 
      case "Scottish Conservative & Union Party": { 
         return "../../assets/scottishConservativeParty.jpg";
        
      } 
      case "Scottish Labour Party": { 
          return "../../assets/Scottish_Labour_Party.jpg";
      } 
      case "Scottish Co-operative": { 
        return "../../assets/Scottish-Co-operative-Party.jpg";
    }
     case "Scottish Liberal Democrats": { 
      return "../../assets/ScottishLiberalDemocrats.jpg";
    } 
    case "Scottish National Party(SNP)": { 
      return "../../assets/snp.jpg";
    } 
    case "Abolish the Scottish Parliament Party": { 
      return "../../assets/Logo_of_the_Abolish_the_Scottish_Parliament_Party.jpg";
    } 
    case "Alba Party": { 
      return "../../assets/Alba_Party.jpg";
    } 
    case "All for Unity": { 
      return "../../assets/alliance-for-unity-scotland.jpg";
    } 
      default: { 
        return "../../assets/scotland.jpg"; 
      } 
   } 
  }
  
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  navigateToLogin()
  {
    DataSource.userList=[];
    this.isclosed=true;
    this.router.navigate(['/','loginPage']);
    this.modalService.dismissAll();
   
  }

}
