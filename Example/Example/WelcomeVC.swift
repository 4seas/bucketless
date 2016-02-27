//
//  WelcomeVC.swift
//  Example
//
//  Created by Sara Du on 2/27/16.
//  Copyright © 2016 Sara Du. All rights reserved.
//

import UIKit

class WelcomeVC: UIViewController, UITextFieldDelegate {

        override func viewDidLoad() {
        super.viewDidLoad()

        let item1 = RMParallaxItem(image: UIImage(named: "eiffel")!, text: "blah blah blah")
        let item2 = RMParallaxItem(image: UIImage(named: "eiffel")!, text: "blah blah blah")
        let item3 = RMParallaxItem(image: UIImage(named: "eiffel")!, text: "blah blah blah")
        let rmParallaxViewController = RMParallax(items: [item1, item2, item3], motion: false)
        rmParallaxViewController.completionHandler = {
            UIView.animateWithDuration(0.4, animations: { () -> Void in
                rmParallaxViewController.view.alpha = 0.0
            })
        }
        
        self.addChildViewController(rmParallaxViewController)
        self.view.addSubview(rmParallaxViewController.view)
        rmParallaxViewController.didMoveToParentViewController(self)
        let tapRecognizer = UITapGestureRecognizer()
        tapRecognizer.addTarget(self, action: "didTapView")
        self.view.addGestureRecognizer(tapRecognizer)

        IMFClient.sharedInstance().initializeWithBackendRoute(
            "https://bmmfs2.mybluemix.net", backendGUID: "89621389-967e-4ec1-a280-028abf5efd27");

    }
    
    func textFieldShouldReturn(textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    func didTapView(){
        self.view.endEditing(true)
    }
}
