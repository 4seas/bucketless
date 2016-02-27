//
//  ViewController.swift
//  UIWebViewWeb
//
//  Created by Chad Lou on 2/26/16.
//  Copyright © 2016 Chad Lou. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let myWebView:UIWebView = UIWebView(frame: CGRectMake(0, 0, UIScreen.mainScreen().bounds.width, UIScreen.mainScreen().bounds.height))
        let url = "https://bucketless.mybluemix.net/"
        //let url = "http://localhost:6006"
        myWebView.loadRequest(NSURLRequest(URL: NSURL(string: url)!))
        self.view.addSubview(myWebView)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

