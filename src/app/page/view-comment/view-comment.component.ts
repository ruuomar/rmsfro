import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { SendCommentService } from '../../service/send-comment.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrl: './view-comment.component.css'
})
export class ViewCommentComponent implements OnInit{

list:any
constructor(private router:Router, private commentservice:SendCommentService){}

  ngOnInit(): void {
    this.getComment();
    
  }

  getComment(){
    return this.commentservice.getComment().subscribe((data)=>{
     this.list = data;
     console.table(this.list);
     
    })
  }


}
