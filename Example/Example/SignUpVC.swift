//
//  SignUpVC.swift
//  Example
//
//  Created by Sara Du on 2/27/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class SignUpVC: UIViewController, UITextFieldDelegate {

    override func viewDidLoad() {
        super.viewDidLoad()

        let tapRecognizer = UITapGestureRecognizer()
        tapRecognizer.addTarget(self, action: "didTapView")
        self.view.addGestureRecognizer(tapRecognizer)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    func didTapView(){
        self.view.endEditing(true)
    }
}
