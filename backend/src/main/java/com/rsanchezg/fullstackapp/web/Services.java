package com.rsanchezg.fullstackapp.web;

import java.security.Principal;
import java.util.Collections;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author raasanch
 */
@RestController
@RequestMapping("/api")
public class Services {

  @RequestMapping("/user")
  public Principal getUser(Principal user) {
    return user;
  }

  @RequestMapping("/token")
  public Map<String, String> getToken(HttpSession session) {
    return Collections.singletonMap("token", session.getId());
  }
}
