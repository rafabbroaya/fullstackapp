package com.rsanchezg.fullstackapp.web;

import java.security.Principal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author raasanch
 */
@RestController
@RequestMapping("/api")
public class Services {

  @RequestMapping("/user")
  public Principal user(Principal user) {
    return user;
  }
}
